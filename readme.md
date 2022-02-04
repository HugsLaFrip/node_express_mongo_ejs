## Pré-requis

* NodeJs
* MongoDB

## Cloner le repository

```bash
git clone https://github.com/HugsLaFrip/node_express_mongo_ejs.git
```

## Intaller le projet

```bash
cd node_express_mongo_ejs/
npm install
```

## Préparer le projet

Renommer le fichier ***.env.local*** en fichier ***.env***.

Remplacer :
    * **<N° of port>** => Port sur lequel vous allez faire tourner le serveur
    * **<Hostname for database>** => Identifiant de connexion à votre base de données
    * **<Password for database>** => Mot de passe de connexion à votre base de données
    * **<Secret token for authentication>** => Toke secret pour identification

## Lancement de l'application

```bash
npm start
```