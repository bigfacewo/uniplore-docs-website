---
sidebar_position: 5
---
### 组件介绍
**“模型评估”（Model Evaluation）**控件用于评估不同时序预测模型。通过计算时序预测模型在以下比较指标的值来评估模型，指标包括：均方根误差（RMSE）、中值绝对误差（MAE）、平均绝对百分比误差（MAPE）、方向变化预测（POCID）、决定系数（R²）、Akaike信息准则（AIC）和贝叶斯信息准则（BIC）。

<hr/>

- 输入：
  - tsd：时序数据
  - tsm：时序预测模型
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“模型评估”（Model Evaluation）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/model-evaluation/param.png) ](/img/aistudio/time-series/model-evaluation/param.png)

点击**“查看结果”**按钮，进行模型评估：
[ ![](/img/aistudio/time-series/model-evaluation/visualization.png) ](/img/aistudio/time-series/model-evaluation/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>折数</td> 
      <td>
      交叉认证的折数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>预测数</td> 
      <td>
      模型预测结果个数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，连接**“VAR模型”（VAR Model）**控件和**“ARIMA模型”（ARIMA Model）**控件构建时序模型，之后使用**“模型评估”（Model Evaluation）**控件查看预测结果。  
[ ![](/img/aistudio/time-series/model-evaluation/workflow.png) ](/img/aistudio/time-series/model-evaluation/workflow.png)

案例中加载 airpassengers 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/time-series/model-evaluation/workflow-result.png) ](/img/aistudio/time-series/model-evaluation/workflow-result.png)