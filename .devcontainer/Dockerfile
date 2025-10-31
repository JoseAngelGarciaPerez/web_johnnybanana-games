FROM node:22.21.1-bookworm-slim

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Madrid

# Install dependencies
RUN apt-get update -y && \
    apt-get install -y \
    build-essential \
    procps \
    file \
    git \
    python3-pip \
    zsh \
    curl \
    wget \
    gnupg \
    pipx \
    ruby-full \
    locales \
    openssh-client \
    --no-install-recommends


#NPM installation
RUN npm install -g npm@10.9.3

#Angular installation
RUN npm install -g @angular/cli



# Add Docker's official GPG key:
RUN apt-get update -y && \
apt-get install -y ca-certificates curl && \
install -m 0755 -d /etc/apt/keyrings && \
curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc && \
chmod a+r /etc/apt/keyrings/docker.asc && \
# Add the repository to Apt sources:
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
tee /etc/apt/sources.list.d/docker.list > /dev/null && \
apt-get update -y && \
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Set the default shell to zsh
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell

ARG USERNAME=web
ARG USER_UID=1069
ARG USER_GID=$USER_UID

# Create a non-root user to use the container
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    #
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN mkdir /workspaces && chown $USERNAME:$USERNAME /workspaces
RUN mkdir /workspaces/$USERNAME && chown $USERNAME:$USERNAME /workspaces/$USERNAME

WORKDIR /workspaces/$USERNAME

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

USER $USERNAME

# Uses "robbyrussell" theme (original Oh My Zsh theme), with no plugins
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell
