# angry-duckhacks

[![License](https://img.shields.io/badge/license-GPL--3.0-green.svg)]()

<img src="https://i.loli.net/2019/02/17/5c69796b1d571.png" width="200" hegiht="800"/>
<br>

**DuckHacks 2019 at Stevens Institute of Technology** 

如果您觉得内容不错，请支持本项目，欢迎给予Star.

[English](https://github.com/nature1995/angry-duckhacks/blob/master/README.md) | 中文

## 简介

当今的社会在国际文化交融日渐广泛，英语已经成为全世界各国人民沟通的桥梁。但即便说的都是一种语言，英语不是母语的人可能会对语言的理解不一样。最终造成情感理解的偏差。
如果我们的程序可以实时记录对话，我们可以分析语言的情绪并协助说话来判断我们的情绪是否正确。通过这种方式，表达了最准确的情感和意义。 

## 目的

这是一个轻量级web服务访问程序，通过它可以直接进行语言转文字，并进行记录。在记录的同时可以进行情感分析。

## 架构
<img src="https://i.loli.net/2019/02/17/5c697080ba3cd.png" width="400" hegiht="800" align=center />

## 特点  
- [x]创建Flask Web服务器 
- [X]构建fontend和后端
- [x]添加功能：实时语音到文本
- [x]添加功能：识别情绪
- [x]添加功能：录制语音文本
- [x]进行实时语音，文本，情感识别。
- [x]在Google Cloud Server上运行Angry-Ducks

## Demo
http://35.237.242.184:5000

## 运行:  
1. 克隆仓库:
```
git clone git@github.com:nature1995/angry-duckhacks.git
```
2. 进入angry-duckhacks文件夹并设置虚拟环境 (https://pypi.org/project/virtualenv):
```
 cd angry-duckhacks
 virtualenv env
 source env/bin/active
```
3. 安装requirement:
```
 pip install -r requirement.txt
```
4. 设置Google Cloud Platform:  
    - Go to https://console.cloud.google.com  
    - Click "Select a project" 
    - Set up a new project.
    - Go to APIs & Services and choose “+ENABLE APIS AND SERVICES”.
    - Enable “Cloud Natural Language API” and “Cloud Speech-to-Text API”.
    - Click “Credentials” => “Create credentials” => “Service account key” =>get your own json key.
5. 将你的json密钥放在工程根目录下
```
/angry-duckhacks/<your project ID>.json
```
6. 更改setting.py
```
GOOGLE_API = 'google-api.json' #Your GOOGLE_API
```
7. 在您自己的计算机上运行服务器:
```
python main.py 0.0.0.0:5000
```

## 作者  
* [**龚子然**](http://ranxiaolang.com)
* [**张方舟**](https://github.com/zfz)
* [**张子栋**](https://github.com/zzdqqqq)
* [**曾宇晨**](https://github.com/zlaomin)

## License  
This software is licensed under the GNU General Public License v3.0 License. For more information, read the file [LICENSE](https://github.com/nature1995/image-classify-django-server/blob/master/LICENSE).