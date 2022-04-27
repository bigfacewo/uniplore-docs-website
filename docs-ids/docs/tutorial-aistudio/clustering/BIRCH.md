### 组件介绍
**“BIRCH”**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“BIRCH”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/clustering/birch/param.png) ](/img/aistudio/clustering/birch/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>自定义簇数量</td> 
      <td>
      是否自定义簇数量，如果为否，则根据设置进行聚类自动生成簇数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>簇数量</td> 
      <td>
      指定簇数量
      </td> 
      <td>3</td>
  </tr>
  <tr>
      <td>簇类特征半径阈值</td> 
      <td>
      实例距离簇中心的距离阈值
      </td> 
      <td>0.5</td>
  </tr>
  <tr>
      <td>最大聚类特征数</td> 
      <td>
      簇中的最大特征数，如果一个簇的特征数超过这个值会分裂为两个簇
      </td> 
      <td>50</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**连接**“BIRCH”**控件进行聚类，之后连接**“查看数据”（Data Table）**控件查看聚类结果。  
[ ![](/img/aistudio/clustering/birch/workflow.png) ](/img/aistudio/clustering/birch/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/clustering/birch/workflow-result.png ](/img/aistudio/clustering/birch/workflow-result.png)