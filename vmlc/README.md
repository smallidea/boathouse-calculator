# VMLC Test

```bash
## deploy
kubectl apply -f smartide-java-v2-vscode-vmlc.yaml
## connect
kubectl exec -i -t -n default smartide-dev-container -c smartide-dev-container "--" sh -c "clear; (bash || ash || sh )"
## switch to smartide user
su smartide
## port forwarding for webide
kubectl port-forward smartide-dev-container 6800:3000
kubectl port-forward smartide-dev-container 6822:22
kubectl port-forward smartide-dev-container 5000:5000
kubectl port-forward smartide-dev-container 4000:4000
```


