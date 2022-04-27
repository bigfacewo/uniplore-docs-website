---
sidebar_position: 1
---
## 入门概述
进入Uniplore iDIS系统页面，打开侧边菜单栏，点击菜单栏内“工作台”中的“人工智能”标签（如下图所示），进入人工智能模块。  
![uniplore-worktable](/img/aistudio/quick-start-tutorial/uniplore-worktable.png)

人工智能模块页面是集构建、运行、编辑、查看于一体的工作区域。在该模块页面中，主要包括三个模块，分别是菜单栏，控件列表以及画布（用于工作流构建）。如下图所示：  
![overview](/img/aistudio/quick-start-tutorial/overview.png)

### 添加控件
在控件列表中，点击左侧目录标签，可查看各个目录下的控件列表。  
找到“IO”控件列表下的“加载文件”控件，点击拖拽控件至画布，进行添加控件的操作。如下图所示：  
![add-file](/img/aistudio/quick-start-tutorial/add-file.png)

也可通过搜索框进行模糊查找，查找后点击拖拽控件至画布。如下图所示：  
![search-widget](/img/aistudio/quick-start-tutorial/search-widget.png)

参考上述步骤，继续添加“数据抽样”控件到画布中。  
![add-data-sampler](/img/aistudio/quick-start-tutorial/add-data-sampler.png)

### 控件介绍
一个控件包括输入端口、参数配置以及输出端口，其中输入端口以及输出端口至少包含其中的一种。输入端口在控件的左侧，输出端口在控件的右侧，如下图所示：  
![widget-overview](/img/aistudio/quick-start-tutorial/widget-overview.png)

通过点击控件，在页面右侧显示控件的参数信息，并可进行参数配置操作，如下图所示：  
![widget-param](/img/aistudio/quick-start-tutorial/widget-param.png)

通过在控件上点击鼠标右键，可显示右键菜单栏，可对控件进行运行，重置，查看结果，重命名以及删除等操作。  
![widget-right-menu](/img/aistudio/quick-start-tutorial/widget-right-menu.png)

#### 控件相关操作
**拖拽控件**  
鼠标左键点击选中需要移动放置的控件，按住鼠标左键拖拽控件到需要放置的位置，松开鼠标左键即可实现控件的拖拽与放置。

**控件连接**  
为了运行工作流，其所包含的控件需要进行数据传输，这里只需进行控件的连接操作即可实现两个控件之间的数据传输。  
控件连接的操作方式是点击需要进行连接的输出端口拖拽连线至输入端口，即可实现连接。  
:::caution
1. 一个输出可连接多个输入，而一个输入只能连接一个输出；
2. 对于想连接的输入以及输出的数据类型需要相同，否则无法进行正确的处理；
3. 个控件的输出端不能连接自身的输入端，即不能自连成环。
:::

**控件参数配置**  
点击控件即可显示控件的参数配置页面，可进行相应的参数配置操作，配置完成后，点击画布空白处，系统会自动保存控件参数。
![data-sample-param](/img/aistudio/quick-start-tutorial/data-sampler-param.png)

**重置控件参数**  
若需把控件参数重置为默认参数，可通过右键控件，点击“重置控件”按钮，即可实现重置控件参数的操作。

**控件重命名**  
右键控件，点击右键菜单中的“重命名”按钮，即可修改控件名称。

**控件运行**  
右键控件，点击右键菜单中的“运行该控件”按钮，即可运行控件。
:::caution
1. 控件运行前需确保控件参数已配置，输入端口已连接；
2. 控件运行前需确保与控件相连的前置控件均已正常运行。
:::

**控件删除**  
右键控件，点击右键菜单中的“删除”按钮，即可删除控件。

## 案例介绍
接下来使用iris鸢尾花分类预测案例，为您介绍如何快速地构建数据挖掘分析服务。

### 构建工作流
在空白画布中，依次添加“文件加载”（File，加载系统示例数据集或加载csv、excel等文件），“数据抽样”（Data Sampler，对输入数据进行抽样），“K最近邻”（KNN，KNN算法），“决策树”（Tree，决策树算法），“预测”（Predictions，显示不同模型对数据的预测），“混淆矩阵”（Confusion Matrix，显示分类器预测结果的真阳性，假阳性，真阴性，假阴性）等控件，并按照下图所示连接控件。
![demo-workflow](/img/aistudio/quick-start-tutorial/demo/workflow.png)

这样便构建了一个模型训练及预测的机器学习工作流。

### 控件配置
1. 点击“文件加载”（File)控件，选择“样例数据”下的“iris”数据集  
![file-param](/img/aistudio/quick-start-tutorial/demo/file-param.png)
2. 点击“数据抽样”（Data Sampler）控件，在该工作流中，使用80%数据进行训练，20%数据进行测试，所以数据抽样的方式选择“固定比例”，设置比例为80%  
![data-sampler-param](/img/aistudio/quick-start-tutorial/demo/data-sampler-param.png)
3. 点击“K最近邻”（KNN）控件，设置邻节点个数为3  
![knn-param](/img/aistudio/quick-start-tutorial/demo/knn-param.png)
4. 点击“决策树”（Tree）控件，设置最大树深度为20  
![tree-param](/img/aistudio/quick-start-tutorial/demo/tree-param.png)  
5. “预测”（Predictions）和“混淆矩阵”（Confusion Matrix）控件无需配置

### 工作流管理
#### 运行工作流
点击菜单栏中的“运行”按钮，运行已经构建的工作流，如下图所示。
![run-workflow](/img/aistudio/quick-start-tutorial/demo/run-workflow.png)  
点击运行后，系统自动运行已构建的工作流，根据控件右上角运行状态判断控件是否运行成功。

#### 查看结果
运行成功后在相应控件上点击鼠标右键，点击右键菜单中的“查看输出结果”按钮来查看控件运行后的输出结果信息。
如：右键“混淆矩阵”（Confusion Matrix）控件，点击右键菜单中的“查看输出结果”按钮可查看“混淆矩阵”的结果如下图所示：  
![confusion-matrix-result](/img/aistudio/quick-start-tutorial/demo/confusion-matrix-result.png)

#### 修改工作流信息
在构建工作流的过程中，系统会自动保存用户的相关操作（添加控件，添加连接，参数配置等），如需对工作流信息进行编辑，可以点击菜单栏中的“保存”按钮，即可进行修改，如下图所示。  
![save-workflow](/img/aistudio/quick-start-tutorial/demo/save-workflow.png)

点击保存按钮后，系统会弹出工作流信息窗口，用户可修改工作流名称并根据需求填写描述（如下图所示）。当填写完成后点击窗口中的“确定”按钮进行保存。  
[ ![](/img/aistudio/quick-start-tutorial/demo/workflow-info.png) ](/img/aistudio/quick-start-tutorial/demo/workflow-info.png)