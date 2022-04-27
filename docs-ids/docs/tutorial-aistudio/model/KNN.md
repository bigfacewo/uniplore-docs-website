### 组件介绍
**“K近邻（KNN）”**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的KNN学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“K近邻（KNN）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/knn/param.png) ](/img/aistudio/model/knn/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>模型名称</td> 
      <td>
      设置模型名称，用于在其他组件中区分不同的模型
      </td> 
      <td>KNN</td>
  </tr>
  <tr>
      <td>邻节点设置</td> 
      <td>
      邻节点个数<br/>
      度量：<br/>
      &emsp;&emsp;欧几里得（Enclidean）：“直线”，两点之间的距离<br/>
      &emsp;&emsp;曼哈顿（Manhattan）：所有属性的绝对差之和<br/>
      &emsp;&emsp;切比雪夫（Chebyshev）<br/>
      &emsp;&emsp;马氏距离（Mahalanobis）：点与分布之间的距离<br/>
      权重：<br/>
      &emsp;&emsp;统一（Uniform）：每个邻居的所有点都是平等的<br/>
      &emsp;&emsp;距离（Distance）：距离查询点较近的邻节点比较远的邻节点影响更大<br/>
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“K近邻（KNN）”**控件进行聚类，之后把**“加载文件（File）”**控件以及**“K近邻（KNN）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
[ ![](/img/aistudio/model/knn/workflow.png) ](/img/aistudio/model/knn/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/model/knn/workflow-result.png) ](/img/aistudio/model/knn/workflow-result.png)