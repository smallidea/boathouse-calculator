# Basic Ingress AKS

ref: 
- https://docs.microsoft.com/en-us/azure/aks/ingress-basic?tabs=azure-cli
- https://www.thorsten-hans.com/custom-domains-in-azure-kubernetes-with-nginx-ingress-azure-cli/
- https://playbook.stakater.com/content/processes/exposing/azure-cluster-with-aws-subdomain.html#deploy-nginx-ingress


Create Ingress controller

```shell
NAMESPACE=ingress-basic

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx --create-namespace --namespace $NAMESPACE
```

Check Load-Balancer service

```shell
kubectl --namespace ingress-basic get services -o wide -w ingress-nginx-controller
```

Run demo applications

```shell
kubectl apply -f aks-helloworld-one.yaml --namespace ingress-basic
kubectl apply -f aks-helloworld-two.yaml --namespace ingress-basic
```

Create an ingress route

```shell
kubectl apply -f hello-world-ingress.yaml --namespace ingress-basic
```

Test the ingress controller

Open 
- http://<load-balancer-ip>
- http://<load-balancer-ip>/hello-world-two