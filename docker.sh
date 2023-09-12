echo ""
echo "Checking for updates"
echo ""
sudo apt-get update
echo ""
echo "Installing pre-requisites"
echo ""
sudo apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
echo ""
sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
echo ""
echo "Checking for updates"
echo ""
sudo apt-get update
echo ""
echo "Installing docker"
echo ""
sudo apt-get install -y --no-install-recommends docker-ce docker-ce-cli containerd.io docker-compose
echo ""
echo "Adding docker to user group"
echo ""
sudo groupadd docker
sudo usermod -aG docker $USER
echo ""
echo "Docker setup completed"
echo ""
echo "*********  Reboot the system  *********"
echo ""