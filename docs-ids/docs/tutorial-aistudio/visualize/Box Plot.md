---
sidebar_position: 4
---
### 组件介绍
**“箱型图（Box Plot）”**控件用于显示属性值的分布。
<hr/>

- 输入：
  - data: 数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“箱型图（Box Plot）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/box-plot/param.png) ](/img/aistudio/visualize/box-plot/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/box-plot/visualization.png) ](/img/aistudio/visualize/box-plot/visualization.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性</td> 
      <td>
      想要绘制的箱型图的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分组属性</td> 
      <td>
      用于分组的属性（一般为离散型属性）
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“箱型图（Box Plot）”**控件绘制箱型图。  
[ ![](/img/aistudio/visualize/box-plot/workflow.png) ](/img/aistudio/visualize/box-plot/workflow.png)

案例中加载“iris”数据集，运行**“箱型图（Box Plot）”**后，分组属性选择【iris】。案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/visualize/box-plot/workflow-result.png) ](/img/aistudio/visualize/box-plot/workflow-result.png)