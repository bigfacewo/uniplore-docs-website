### 组件介绍
**“预测”（Predictions）**控件显示模型对数据的预测。该控件需要输入一个数据集以及一个或多个预测器（包括分类器、非学习算法等），然后输出评估结果以及包含预测结果的原始数据集。

<hr/>

- 输入：
  - data：训练数据集
  - mod：要在数据上使用的预测器
- 输出：
  - evr：评估结果
  - prdt：增加了预测的原始数据集

<hr/>


### 页面介绍
点击**“预测”（Predictions）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/evaluate/predictions/param.png) ](/img/aistudio/evaluate/predictions/param.png)

点击**“查看预测结果”**按钮，查看模型预测结果：  
[ ![](/img/aistudio/evaluate/predictions/interaction.png) ](/img/aistudio/evaluate/predictions/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>输出</td> 
      <td>
      需要输出的数据<br/>
      &emsp;&emsp;原始数据：接入的输入数据<br/>
      &emsp;&emsp;类标预测值：各模型的预测结果<br/>
      &emsp;&emsp;预测概率值：对于分类任务，各模型预测结果的概率信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>取值预测概率</td> 
      <td>
      如果选中取值预测概率，则表中显示各模型的预测概率信息
      </td> 
      <td></td>
  </tr>
</table>

### 模型信息标签

模型信息标签页展示了工作流中的模型组件的参数信息，展示页面如下图所示。  
[ ![](/img/aistudio/evaluate/predictions/model-info.png) ](/img/aistudio/evaluate/predictions/model-info.png)

#### 信息选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>分类器</td> 
      <td>
      模型列表
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>参数信息</td> 
      <td>
      选择的模型参数信息
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，连接**“K近邻”（KNN）**、**“决策树”（Tree）**训练模型，后将模型以及数据与“Predictions”控件相连接，查看预测结果。   
[ ![](/img/aistudio/evaluate/predictions/workflow.png) ](/img/aistudio/evaluate/predictions/workflow.png)

案例中加载 iris 数据集，其余控件使用默认参数。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/evaluate/predictions/workflow-result.png) ](/img/aistudio/evaluate/predictions/workflow-result.png)