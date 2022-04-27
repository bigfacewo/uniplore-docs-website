### 组件介绍
**“差分”（Difference）**控件根据输入数据集，以及配置参数进行构建VAR时序预测模型。

<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - tsd：处理后的数据

<hr/>


### 页面介绍
点击**“差分”（Difference）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/difference/param.png) ](/img/aistudio/time-series/difference/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>运算指标</td> 
      <td>
      差分运算指标：<br/>
      &emsp;&emsp;Difference<br/>
      &emsp;&emsp;Quotient<br/>
      &emsp;&emsp;Percentage
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>差序</td> 
      <td>
      选择一阶或二阶离散差
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>位移</td> 
      <td>
      求差前的移位<br/>
      值等于1表示离散差分
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>反转差分方向</td> 
      <td>
      反转差分方向
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>操作的属性</td> 
      <td>
      选择进行操作的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“查看数据”（Data Table）**查看数据集，同时连接**“差分”（Difference）**控件对数据进行差分处理，之后使用**“查看数据”（Data Table）**控件查看处理后的数据。  
[ ![](/img/aistudio/time-series/difference/workflow.png) ](/img/aistudio/time-series/difference/workflow.png)

案例中加载 airpassengers 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/time-series/difference/workflow-result.png) ](/img/aistudio/time-series/difference/workflow-result.png)