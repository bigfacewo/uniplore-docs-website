### 组件介绍
**“DBSCAN”**控件主要是基于密度的聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“DBSCAN”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/clustering/dbscan/param.png) ](/img/aistudio/clustering/dbscan/param.png)

点击“查看图表”按钮，查看绘制的DBSCAN邻接点距离计算图：
[ ![](/img/aistudio/clustering/dbscan/interaction.png) ](/img/aistudio/clustering/dbscan/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>最小包含点数</td> 
      <td>
      核心点的邻节点树量
      </td> 
      <td>4</td>
  </tr>
  <tr>
      <td>扫描半径</td> 
      <td>
      两个样本点之间的最大距离
      </td> 
      <td>0.5</td>
  </tr>
  <tr>
      <td>度量</td> 
      <td>
      对数据进行分组的距离度量<br/>
      &emsp;&emsp;欧几里得（Eclidean）：两点间的直线距离<br/>
      &emsp;&emsp;曼哈顿（Manhattan）：所有属性的绝对差值之和<br/>
      &emsp;&emsp;余弦（Cosine）：内积空间中两个向量的夹角的余弦值"
      </td> 
      <td>Eclidean</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**连接**“BIRCH”**控件进行聚类，之后连接**“查看数据”（Data Table）**控件查看聚类结果。  
[ ![](/img/aistudio/clustering/dbscan/workflow.png) ](/img/aistudio/clustering/dbscan/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/clustering/dbscan/workflow-result.png) ](/img/aistudio/clustering/dbscan/workflow-result.png)