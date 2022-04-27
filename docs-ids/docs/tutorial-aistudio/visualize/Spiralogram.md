### 组件介绍
**“螺旋图（Spiralogram）”**控件用于周期性的可视化时序数据换。
<hr/>

- 输入：
  - tsd: 时序数据
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“螺旋图（Spiralogram）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/spiralogram/param.png) ](/img/aistudio/visualize/spiralogram/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/spiralogram/visualization.png) ](/img/aistudio/visualize/spiralogram/visualization.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td rowspan="2">坐标轴数据</td> 
      <td>y轴</td> 
      <td>
      年、月或天、一年中的月份、星期数、月数、一年中的天数、一年中的周数、周数、周数、一天中的小时数、小时数、小时数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>径向</td> 
      <td>
      年、月或天、一年中的月份、星期数、月数、一年中的天数、一年中的周数、周数、周数、一天中的小时数、小时数、小时数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td rowspan="2">聚集操作</td> 
      <td>属性</td> 
      <td>
      选择需要进行聚集操作的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>函数</td> 
      <td>
      聚集函数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“螺旋图（Spiralogram）”**控件绘制螺旋图。  
[ ![](/img/aistudio/visualize/spiralogram/workflow.png) ](/img/aistudio/visualize/spiralogram/workflow.png)

案例中加载“airpassengers”数据集，案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/visualize/spiralogram/workflow-result.png ](/img/aistudio/visualize/spiralogram/workflow-result.png)