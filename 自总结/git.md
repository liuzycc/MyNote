##SSH
- 使用git bash 执行 ssh-keygen -t rsa
- 找到 C:\Users\Administrator.ssh\id_rsa.pub 且复制内容
- 去代码托管平台 配置新的KEY 内容为刚才复制的内容。

##用户信息
配置个人的用户名称和电子邮件地址：

$ git config --global user.name "liuziyi"
$ git config --global user.email 552019419@qq.com

##文本编辑器
设置Git默认使用的文本编辑器, 一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：:

$ git config --global core.editor emacs

##差异分析工具
还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：

$ git config --global merge.tool vimdiff

##查看配置信息
要检查已有的配置信息，可以使用 git config --list 命令：

$ git config --list
http.postbuffer=2M
user.name=liuziyi
user.email=552019419@qq.com


#Git 简单操作

使用当前目录作为Git仓库，我们只需使它初始化。

git init

以下命令将目录下以 .c 结尾及 README 文件提交到仓库中。
$ git add *.c
$ git add README
$ git commit -m '初始化项目版本'

git clone克隆
一下两种都可以
$ git clone git://github.com/schacon/grit.git
$ git clone http://github.com/CosmosHua/locate


克隆分支  -b static  是分支名称
git clone -b static git@github.com:zhousg/node-blog.git


## Git 查看提交历史
$ git log

我们可以用 --oneline 选项来查看历史记录的简洁的版本。
$ git log --oneline

我们还可以用 --graph 选项，查看历史中什么时候出现了分支、合并。以下为相同的命令，开启了拓扑图选项：
$ git log --oneline --graph

## Git 远程仓库(Github)
添加远程库
要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：
git remote add [shortname] [url]

由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以我们需要配置验证信息：
使用以下命令生成SSH Key：

$ ssh-keygen -t rsa -C "youremail@example.com"

后面的 your_email@youremail.com 改为你在 github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在~/下生成.ssh文件夹，进去，打开 id_rsa.pub，复制里面的 key。
回到 github 上，进入 Account => Settings（账户配置）。

为了验证是否成功，输入以下命令：
$ ssh -T git@github.com

查看当前的远程库
$ git remote

提取远程仓库
git fetch
该命令执行完后需要执行git merge 远程分支到你所在的分支。

2、从远端仓库提取数据并尝试合并到当前分支：
git merge

查看 README.md 文件内容：
$ cat README.md 

推送到远程仓库
$git push [alias] [branch]

删除远程仓库
git remote rm [别名]



# 提交到 Github(首先需要完成本地仓库的添加)

完成本地仓库的添加
$ git init                                  # 初始化
$ git add README.md                         # 添加文件
$ git commit -m "添加 README.md 文件"        # 提交并备注信息

下面是推送到github
$ git remote add origin git@github.com:tianqixin/runoob-git-test.git
$ git push -u origin master


# 提交分支
git checkout home
git add .
git commit -m 'home完成'
git push -u 'xxxGit路径' home  //到这里就已经提交路径了
//接下来就是合并分支，使master为最新代码库
# 合并分支
git merge login  //把login分支合并到主分支
// 必须在master分支上，运行 git merge login 命令

也就是,先通过 git checkout master命令,切换到master主分支：
然后在主分支上执行命令 git merge login 合并


$ git checkout -b home //创建并切换到home分支
