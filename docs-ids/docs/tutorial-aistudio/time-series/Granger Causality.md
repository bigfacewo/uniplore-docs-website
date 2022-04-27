### 组件介绍
**“格兰杰因果关系”（Granger Causality）**控件用于衡量时间序列之间相互影响关系。

<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“格兰杰因果关系”（Granger Causality）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/time-series/granger-causality/param.png) ](/img/aistudio/time-series/granger-causality/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>置信区间</td> 
      <td>
      最大置信度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>最大落后期</td> 
      <td>
      检验的最大落后期
      </td> 
      <td></td>
  </tr>
</table>

### 格兰杰因果检验结果
点击**“查看结果”**按钮，查看格兰杰因果检验结果：  
[ ![](/img/aistudio/time-series/granger-causality/visualization.png) ](/img/aistudio/time-series/granger-causality/visualization.png)


<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>最小落后期</td> 
      <td>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>变量1</td> 
      <td>
      前因
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>变量2</td> 
      <td>
      结果
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“格兰杰因果关系”（Granger Causality）**控件进行格兰杰因果关系检测。  
[ ![](/img/aistudio/time-series/granger-causality/workflow.png) ](/img/aistudio/time-series/granger-causality/workflow.png)

案例中加载 iris 数据集，案例中控件执行结果如下图所示。   
[ ![](/img/aistudio/time-series/granger-causality/workflow-result.png ](/img/aistudio/time-series/granger-causality/workflow-result.png)