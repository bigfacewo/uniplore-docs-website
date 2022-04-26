### 组件介绍
**“线形图表（Line Chart）”**控件通过线性图表的方式可视化时序数据，同时可以接收时序模型预测结果，展示预测信息。

- 输入：
  - tsd：时序数据
  - fore：时序模型的预测结果
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“线形图表（Line Chart）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/line-chart/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization](/img/aistudio/visualize/line-chart/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>图表类型</td> 
      <td>
      图表的展示类型，包括：折线图、阶梯线图、柱状图、面积图、光滑样条图
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>属性列表</td> 
      <td>
      选择需要绘制线形图表的属性，可多选
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“ARIMA Model”**控件构建时序模型，接着使用**“线形图表（Line Chart）”**控件绘制包含预测值的线性图表。
![workflow](/img/aistudio/visualize/line-chart/workflow.png)

案例中加载“airpassenger”数据集，运行**“ARIMA Model”**控件中，设置预测期数为5，案例中控件的配置以及执行结果如下图所示。
![workflow-result](/img/aistudio/visualize/line-chart/workflow-result.png)