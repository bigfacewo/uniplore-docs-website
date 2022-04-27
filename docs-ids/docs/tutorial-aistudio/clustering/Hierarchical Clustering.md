### 组件介绍
**“层次聚类”（Hierarchical Clustering）**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - dis：距离矩阵
- 输出：
  - dis：距离矩阵

<hr/>


### 页面介绍
点击**“层次聚类”（Hierarchical Clustering）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/clustering/hierarchical-clustering/param.png) ](/img/aistudio/clustering/hierarchical-clustering/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>连接</td> 
      <td>
      簇间距离度量：<br/>
      &emsp;&emsp;最短距离法<br/>
      &emsp;&emsp;未加权平均距离法<br/>
      &emsp;&emsp;最长距离法<br/>
      &emsp;&emsp;内平方距离法
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>注释</td> 
      <td>
      树图中的注释信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>剪枝</td> 
      <td>
      当树图较大时，用户可限制树的最大深度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>缩放</td> 
      <td>
      对树图进行缩放
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载距离文件”（Distance File）**控件加载距离文件，将结果作为**“层次聚类”（Hierarchical Clustering）**的输入，查看聚类结果。  
[ ![](/img/aistudio/clustering/hierarchical-clustering/workflow.png) ](/img/aistudio/clustering/hierarchical-clustering/workflow.png)

案例中加载“Conferences”数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/clustering/hierarchical-clustering/workflow-result.png) ](/img/aistudio/clustering/hierarchical-clustering/workflow-result.png)