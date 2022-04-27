### 组件介绍
**“距离矩阵”（Distance Matrix）**控件以类似热力图的方式向用户展示了距离矩阵。控件展示了一个包含距离的二维距离矩阵，矩阵大小由输入数据集中元素数量定义。

<hr/>

- 输入：
  - dis：距离矩阵
- 输出：
  - dis：距离矩阵
  - data：由距离矩阵中的距离构成的数据集

<hr/>


### 页面介绍
点击**“距离矩阵”（Distance Matrix）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/distance-matrix/param.png) ](/img/aistudio/preprocess/distance-matrix/param.png)

点击**“查看数据”**按钮，可查看距离矩阵：
[ ![](/img/aistudio/preprocess/distance-matrix/interaction.png) ](/img/aistudio/preprocess/distance-matrix/interaction.png)

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，然后连接**“距离转换”（Distances）**控件以计算距离矩阵，之后连接**“距离变换”（Distance Matrix）**控件查看距离矩阵。   
[ ![](/img/aistudio/preprocess/distance-matrix/workflow.png) ](/img/aistudio/preprocess/distance-matrix/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/preprocess/distance-matrix/workflow-result.png) ](/img/aistudio/preprocess/distance-matrix/workflow-result.png)