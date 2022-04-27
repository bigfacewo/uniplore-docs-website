### 组件介绍
**“ARIMA模型”（ARIMA Model）**控件根据输入数据集，以及配置参数进行构建ARMA，ARIMA或ARIMAX时序预测模型。

<hr/>

- 输入：
  - tsd：时序数据
  - exog：可用于 ARIMAX 模型的附加自变量时序数据
- 输出：
  - tsm：时序预测模型
  - fore：预测的时序数据
  - fit：模型实际拟合的值，等于原始值减去残差
  - resid：模型在每一步的预测误差

<hr/>


### 页面介绍
点击**“ARIMA模型”（ARIMA Model）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/arima-model/param.png) ](/img/aistudio/time-series/arima-model/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>模型名称</td> 
      <td>
      默认为根据参数配置自动生成，也可用户自定义
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>自回归项数（p）</td> 
      <td rowspan="3">
      <a href="https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average">参数介绍</a>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>差分阶数（d）</td> 
      <td></td>
  </tr>
  <tr>
      <td>滑动平均项数（q）</td> 
      <td></td>
  </tr>
  <tr>
      <td>使用外生变量</td> 
      <td>
      若勾选，则输入需连接可用于 ARIMAX 模型的附加自变量时序数据
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>预测期数</td> 
      <td>
      模型预测多少期数据
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>置信区间</td> 
      <td>
      指定预测结果的置信区间
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，连接**“ARIMA模型”（ARIMA Model）**控件构建时序模型，之后使用**“查看数据”（Data Table）**控件查看预测结果。  
[ ![](/img/aistudio/time-series/arima-model/workflow.png) ](/img/aistudio/time-series/arima-model/workflow.png)

案例中加载 airpassengers 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/time-series/arima-model/workflow-result.png) ](/img/aistudio/time-series/arima-model/workflow-result.png)