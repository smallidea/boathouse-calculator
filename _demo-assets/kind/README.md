# KIND Scenarios

## Single Node Cluster

```shell
kind create cluster --image registry.cn-hangzhou.aliyuncs.com/smartide/nestybox-kindestnode:v1.20.7
```

## Multi-Node Cluster

```shell
kind create cluster \
    --config multi-node.yaml \
    --image registry.cn-hangzhou.aliyuncs.com/smartide/nestybox-kindestnode:v1.20.7
```

## extraPortMapping - Ingress

```shell
## Create Cluster
kind create cluster \
    --config cluster-extraPortMappings.yaml \
    --image registry.cn-hangzhou.aliyuncs.com/smartide/nestybox-kindestnode:v1.20.7
## Install Nginx Ingress Controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

## Wait Until ready
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

## Verify with usage example
kubectl apply -f echo-ingress.yaml

## Deploy calcualtor
kubectl apply -f ../kubeconfig/deployment.yaml
kubectl apply -f ../kubeconfig/ingress.yaml
```