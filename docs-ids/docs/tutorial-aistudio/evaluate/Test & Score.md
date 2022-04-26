### 组件介绍
**“评分和测试”（Test & Score）**控件根据输入数据进行模型训练及测试并对模型评分。**“评分和测试”（Test & Score）**控件用来测试模型算法，可以使用不同的采样方案，包括使用单独的测试数据。控件包含两部分，首先，该控件会显示一个包含不同分类器性能指标的表格，其中性能指标包括分类精度和曲线下方的面积等。其次，该控件还会输出评估结果，供其它控件分析分类器的性能，如“Confusion Matrix”控件等。

<hr/>

- 输入：
  - trndt：训练数据
  - tstdt：测试数据
  - lrn：一个或多个算法
- 输出：
  - evr：评估结果，测试分类算法的结果
  - data：预测结果
  - prdt：模型评分结果

<hr/>


### 页面介绍
点击**“评分和测试”（Test & Score）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/evaluate/test-and-score/param.png)

点击**“查看数据”**按钮，查看详细的模型评分：  
![interaction](/img/aistudio/evaluate/test-and-score/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>抽样方法</td> 
      <td>
      控件支持多种抽样方法：<br/>
      &emsp;&emsp;交叉证认：将数据分成给定数量的折（子样本），通常是 5 或 10，并将一个单独的子样本保留作为验证模型的数据，其他 k-1 个样本用来训练。交叉验证重复 k 次，每个子样本验证一次，平均 k 次的结果最终得到一个单一估测。<br/>
      &emsp;&emsp;留一策略：与交叉证认类似，但是它只使用原本样本中的一项来当做验证资料， 而剩余的则留下来当做训练集。这个步骤一直持续到每个样本都被当做一次验证资料。此方法稳定可靠，但是效率较低。<br/>
      &emsp;&emsp;随机抽样：按照给定的比例将数据随机分成训练集和测试集，并且可指定整个过程重复的次数。<br/>
      &emsp;&emsp;训练集中测试：使用整个数据集进行训练，然后进行测试。此方法实际应用中总会给出错误的结果。<br/>
      &emsp;&emsp;测试集中测试：上述方法仅使用来自数据信号的数据。要使用测试示例输入另一个数据集（例如从文件或从控件中选择的某些数据），我们在通信通道中选择独立测试数据，然后选择测试数据测试。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>目标类</td> 
      <td>
      选择目标类，只有“测试集中测试”需要用到此选项，当无目标类可选择时则返回平均值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>评估结果</td> 
      <td>
      计算性能统计信息
      </td> 
      <td></td>
  </tr>
</table>

### 模型信息标签

模型信息标签页展示了工作流中的模型组件的参数信息，展示页面如下图所示。  
![model-info](/img/aistudio/evaluate/test-and-score/model-info.png)

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
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，针对**“K近邻”（KNN）**、**“决策树”（Tree）**等算法进行测试和评估。   
![workflow](/img/aistudio/evaluate/test-and-score/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/evaluate/test-and-score/workflow-result.png)