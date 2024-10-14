.PHONY: all test clean

SHELL := /bin/bash

package:
		helm package .

helm/context:
	kubectl config use-context $(context)

## Install Helm chart
helm/install: helm/context
	cd helm/question5 && \
		helm upgrade --install $(name) . \
		--namespace $(namespace) \
		--set env=$(env) \
		--set image.tag=$(image_tag) \
		--debug
	sleep 5

## Delete Helm release and redeploy
helm/redeploy: helm/uninstall helm/install

## Run Helm template
template:
	helm template . \
		--name-template=$(name) \
		--namespace $(namespace) \
		--set global.env=$(env) \
		--debug

## Forward port to service
helm/port_forward: helm/context
		kubectl port-forward --namespace $(namespace) svc/$(name) $(port):$(port)

## Stop port forwarding
helm/stop_pf: helm/context
	./scripts/stop_port_forward.sh $(port)

## Get pod logs
helm/logs: helm/context
	./scripts/get_pod_logs.sh $(namespace) $(name) || true

## Create chart schema
helm/schema_create:
	cd helm/question5 && helm schema-gen values.yaml > values.schema.json

## Delete helm installation
helm/uninstall:
	./scripts/stop_port_forward.sh $(port) && \
	kubectl config use-context $(context) && \
		helm uninstall --namespace $(namespace) $(name) || true

