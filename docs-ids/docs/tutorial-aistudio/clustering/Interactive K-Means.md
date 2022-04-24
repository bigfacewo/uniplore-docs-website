### 组件介绍
**“交互式 K-Means”（Interactive K-Means）**控件用于展示k均值聚类算法对数据集中某两个属性的聚类。此组件将k-means聚类逐步应用于所选的两个属性。用户可以逐步了解算法，并查看其工作原理。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集
  - cen：每个簇的中心点

<hr/>


### 页面介绍
点击**“交互式 K-Means”（Interactive K-Means）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/clustering/interactive-kmeans/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>坐标轴</td> 
      <td>
      选择x和y轴的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>聚类中心</td> 
      <td>
      中心点个数：设置中心数<br/>
      随机位置：随机分配质心的位置。如果要在图形的特定位置添加质心，请单击此位置。如果要移动质心，请将其拖放到所需位置。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>手动单步执行</td> 
      <td>
      重计算聚类中心：逐步执行算法的不同阶段。基于分配给质心的数据的最中央位置，重新计算质心将质心移动到新位置。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>自动执行</td> 
      <td>
      自动计算：自动地逐步执行。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，连接**“交互式 K-Means”（Interactive K-Means）**控件进行交互式聚类操作，最后连接**“查看数据”（Data Table）**查看控件输出。  
![workflow](/img/aistudio/clustering/interactive-kmeans/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/clustering/interactive-kmeans/workflow-result.png)