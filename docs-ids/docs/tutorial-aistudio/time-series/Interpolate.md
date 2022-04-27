### 组件介绍
**“插值处理”（Interpolate）**控件对时序数据中的缺失值进行插值处理。

<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - tsd：处理后的数据

<hr/>


### 页面介绍
点击**“插值处理”（Interpolate）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/interpolate/param.png) ](/img/aistudio/time-series/interpolate/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>缺失值插补方案</td> 
      <td>
      处理缺失值的方法：<br/>
      &emsp;&emsp;线性插值法（Linear）<br/>
      &emsp;&emsp;三次样条插值法（Spline）<br/>
      &emsp;&emsp;最近邻插值法（Nearest）<br/>
      &emsp;&emsp;平均值插值法（Mean）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>多元多项式插值</td> 
      <td>
      多元多项式处理
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“查看数据”（Data Table）**查看数据集，同时连接**“插值处理”（Interpolate）**控件对数据进行插值处理，之后使用**“查看数据”（Data Table）**控件查看处理后的数据。  
[ ![](/img/aistudio/time-series/interpolate/workflow.png) ](/img/aistudio/time-series/interpolate/workflow.png)

案例中加载 [ airpassengers-missing ](/sample-file/aistudio/time-series/interpolate/airpassengers-missing.csv) 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/time-series/interpolate/workflow-result.png) ](/img/aistudio/time-series/interpolate/workflow-result.png)