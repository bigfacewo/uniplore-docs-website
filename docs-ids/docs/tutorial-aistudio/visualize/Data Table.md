### 组件介绍
**“查看数据（Data Table）”**控件用于查看输入的数据集。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“查看数据（Data Table）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/data-table/param.png) ](/img/aistudio/visualize/data-table/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[![](/img/aistudio/visualize/data-table/visualization.png)](/img/aistudio/visualize/data-table/visualization.png)
#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>基本信息</td> 
      <td>
      显示数据集的相关信息，包括数据集大小、是否有缺失值、属性类型以及属性个数等
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>可视化选项</td> 
      <td>
      是否对连续值进行可视化展示（显示比例条）<br/>
      是否根据 class or target（分类属性）进行颜色标记
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，再通过**“查看数据（Data Table）”**控件查看加载的数据集。  
[ ![](/img/aistudio/visualize/data-table/workflow.png) ](/img/aistudio/visualize/data-table/workflow.png)

案例中加载“iris”数据集，运行**“查看数据（Data Table）”**后，勾选“可视化连续值”以及“根据示例类型标记颜色”。案例中控件的配置以及执行结果如下图所示。  
[![](/img/aistudio/visualize/data-table/workflow-result.png)](/img/aistudio/visualize/data-table/workflow-result.png)