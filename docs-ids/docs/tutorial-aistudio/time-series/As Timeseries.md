---
sidebar_position: 0
---
### 组件介绍
**转换时间序列（As Timeseries）**控件根据输入数据集，以及配置参数进行构建VAR时序预测模型。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - tsd：按指定时间序列排序后的数据集

<hr/>


### 页面介绍
点击**转换时间序列（As Timeseries）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/as-timeseries/param.png) ](/img/aistudio/time-series/as-timeseries/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>排序属性</td> 
      <td>
      自定义排序属性，能够根据任何输入的连续属性进行排序
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>根据实例顺序排序</td> 
      <td>
      指定时间序列的顺序由实例顺序决定
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“查看数据”（Data Table）**查看数据集，同时连接**转换时间序列（As Timeseries）**控件对数据进行操作，之后使用**“查看数据”（Data Table）**控件查看处理后的数据。  
[ ![](/img/aistudio/time-series/as-timeseries/workflow.png) ](/img/aistudio/time-series/as-timeseries/workflow.png)

案例中加载 iris 数据集，对于**转换时间序列（As Timeseries）**控件，选择排序属性为【sepal length】，案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/time-series/as-timeseries/workflow-result.png) ](/img/aistudio/time-series/as-timeseries/workflow-result.png)