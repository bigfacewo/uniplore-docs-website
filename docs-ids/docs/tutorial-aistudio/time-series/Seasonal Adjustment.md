### 组件介绍
**“季节性调整”（Seasonal Adjustment）**控件将选定时序数据分解为季节性序列、趋势性序列和残差序列。

<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - tsd：季节性序列、趋势性序列和残差序列

<hr/>


### 页面介绍
点击**“季节性调整”（Seasonal Adjustment）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/seasonal-adjustment/param.png) ](/img/aistudio/time-series/seasonal-adjustment/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>季节周期</td> 
      <td>
      指定时间单元的周期数（例如，对于月份，周期为12）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分解模型</td> 
      <td>
      可选加法或乘法模型。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>时间序列</td> 
      <td>
      指定季节性分解的时间序列。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“查看数据”（Data Table）**查看数据集，同时连接**“季节性调整”（Seasonal Adjustment）**控件对数据进行处理，之后使用**“查看数据”（Data Table）**控件查看处理后的数据。  
[ ![](/img/aistudio/time-series/seasonal-adjustment/workflow.png) ](/img/aistudio/time-series/seasonal-adjustment/workflow.png)

案例中加载“airpassengers”数据集，**“季节性调整”（Seasonal Adjustment）**控件中分解模型选项选择可加模型，属性选择对【Air passengers】属性，案例中控件执行结果如下图所示。   
[ ![](/img/aistudio/time-series/seasonal-adjustment/workflow-result.png) ](/img/aistudio/time-series/seasonal-adjustment/workflow-result.png)