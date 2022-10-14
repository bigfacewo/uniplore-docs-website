---
sidebar_position: 2
---
### 组件介绍
**“K-Means”**控件提供了k-Means 聚类算法对数据进行聚类。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集
  - cen：每个簇的中心点

<hr/>


### 页面介绍
点击**“K-Means”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/clustering/kmeans/param.png) ](/img/aistudio/clustering/kmeans/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>簇数量</td> 
      <td>
      固定：为簇数指定一个固定值<br/>
      从...到...：将在下方显示设置的簇范围的轮廓分数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>初始化方法</td> 
      <td>
      k-Means++：随机选择第一个中心点，然后从剩余点中以与最邻近中心的平方距离成正比的概率选择后续的中心点<br/>
      随机初始化：最初时随机完成簇的划分，并在后续迭代过程中逐步更新"
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>重新运行次数</td> 
      <td>
      算法运行次数
      </td> 
      <td>10</td>
  </tr>
  <tr>
      <td>最大迭代次数</td> 
      <td>
      算法运行的最大迭代次数
      </td> 
      <td>200</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**连接**“K-Means”**控件进行聚类，之后连接**“查看数据”（Data Table）**控件查看聚类结果。  
[ ![](/img/aistudio/clustering/kmeans/workflow.png) ](/img/aistudio/clustering/kmeans/workflow.png)

案例中加载 iris 数据集，k-Means 控件中配置簇数量为“从 2 到 3”，其余使用默认配置。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/clustering/kmeans/workflow-result.png) ](/img/aistudio/clustering/kmeans/workflow-result.png)