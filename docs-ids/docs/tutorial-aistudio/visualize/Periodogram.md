### 组件介绍
**“周期性（Periodogram）”**控件通过线性图表的方式可视化时序数据，同时可以接收时序模型预测结果，展示预测信息。

- 输入：
  - tsd：时序数据
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“周期性（Periodogram）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/periodogram/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization-1](/img/aistudio/model/periodogram/visualization-1.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>周期属性</td> 
      <td>
      选择需要进行绘制图表的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，使用**“转换时间序列（As Timeseries）”**控件把输入数据集转换为时序数据集，接着使用**“周期性（Periodogram）”**控件展示数据。
![workflow](/img/aistudio/model/periodogram/workflow.png)

案例中加载“airpassenger”数据集，运行**“转换时间序列（As Timeseries）”**控件中，排序方案选择排序属性，设置排序属性为【Month】，案例中控件的配置以及执行结果如下图所示:
![visualization-2](/img/aistudio/model/periodogram/visualization-2.png)