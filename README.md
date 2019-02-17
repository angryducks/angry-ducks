# angry-duckhacks

[![License](https://img.shields.io/badge/license-GPL--3.0-green.svg)]()

<img src="https://i.loli.net/2019/02/17/5c69796b1d571.png" width="200" hegiht="800"/>
<br>

**DuckHacks 2019 at Stevens Institute of Technology** 

If you appreciate the content, support projects, give star!

English| [中文](https://github.com/nature1995/angry-duckhacks/blob/master/README.cn.md)

## Introduction  
Nowadays, the society has become more and more extensive in international culture, and English has become a bridge for communication between people all over the world. But even if it is a language, people who are not native speakers of English may have different understandings of the language. The result is a bias in emotional understanding. 

If our program can record conversations in real time, we can analyze the emotions of the language and assist in speaking to judge whether our emotions are correct. In this way, the most accurate emotions and meanings are expressed.

## Purposals  
This is a lightweight web service access program that allows you to directly translate text into words and record them. Emotional analysis can be performed while recording.

## Architecture。
<img src="https://i.loli.net/2019/02/17/5c697080ba3cd.png" width="400" hegiht="800" align=center />

## Features  
- [x] Create Flask web server
- [X] Build fontend and backend
- [x] Add feature: Real time speech to text
- [x] Add feature: Identify sentiment
- [x] Add feature: Record speech text
- [x] Make real time speech, text, sentiment identification. 
- [x] Run Angry-Ducks on the Google Cloud Server

## Demo
http://35.237.242.184:5000

## Run the code:  
1. Clone this repository:
```
git clone git@github.com:nature1995/angry-duckhacks.git
```
2. Go into angry-duckhacks folder and set up virtual environment (https://pypi.org/project/virtualenv):
```
 cd angry-duckhacks
 virtualenv env
 source env/bin/active
```
3. Install requirement:
```
 pip install -r requirement.txt
```
4. Set up Google Cloud Platform:  
    - Go to https://console.cloud.google.com  
    - Click "Select a project" 
    - Set up a new project.
    - Go to APIs & Services and choose “+ENABLE APIS AND SERVICES”.
    - Enable “Cloud Natural Language API” and “Cloud Speech-to-Text API”.
    - Click “Credentials” => “Create credentials” => “Service account key” =>get your own json key.
5. Put your json key under angry-duckhacks root
```
/angry-duckhacks/<your project ID>.json
```
6. Change setting.py
```
GOOGLE_API = 'google-api.json' #Your GOOGLE_API
```
7. Run server on your own computer:
```
python main.py 0.0.0.0:5000
```

## Author  
* [**Ziran Gong**](http://ranxiaolang.com)
* [**Fangzhou Zhang**](https://github.com/zfz)
* [**Zidong Zhang**](https://github.com/zzdqqqq)
* [**Yuchen Zeng**](https://github.com/zlaomin)

## License  
This software is licensed under the GNU General Public License v3.0 License. For more information, read the file [LICENSE](https://github.com/nature1995/image-classify-django-server/blob/master/LICENSE).
