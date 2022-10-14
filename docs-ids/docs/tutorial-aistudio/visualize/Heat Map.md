---
sidebar_position: 10
---
### 组件介绍
**“热力图（Heat Map）”**控件用于绘制及展示输入数据的热力图。热力图用颜色表示值，值越大代表的颜色越深。
<hr/>

- 输入：
  - data: 数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“热力图（Heat Map）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/heat-map/param.png) ](/img/aistudio/visualize/heat-map/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/heat-map/visualization.png) ](/img/aistudio/visualize/heat-map/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>根据k-means进行合并</td> 
      <td>
      是否进行聚类操作并合并数据
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>簇数</td> 
      <td>
      聚类簇数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示平均值</td> 
      <td>
      是否显示平均值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>行附注</td> 
      <td>
      选择显示行附注的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“热力图（Heat Map）”**控件绘制热力图。  
[ ![](/img/aistudio/visualize/heat-map/workflow.png) ](/img/aistudio/visualize/heat-map/workflow.png)

案例中加载“iris”数据集，运行**“热力图（Heat Map）”**后，勾选根据k-means进行合并，其余使用默认参数。案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/visualize/heat-map/workflow-result.png) ](/img/aistudio/visualize/heat-map/workflow-result.png)