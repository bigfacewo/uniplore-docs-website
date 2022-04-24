### 组件介绍
**“梯度提升决策树（Gradient Boosting Decision Tree）”**控件为迭代决策树模型。该组件是一种基于决策树的集成学习方法，该方法利用所有树的结论累加起来做最终答案，常用于各种分类和预测问题。
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的GBDT学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“Gradient Boosting Decision Tree”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/gbdt/param.png)

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
      设置模型名称，用于在其他组件中区分不同的模型
      </td> 
      <td>GBDT</td>
  </tr>
  <tr>
      <td>树的数量</td> 
      <td>
      默认数值为10。
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>学习率</td> 
    <td>
    每个提升迭代阶段学习的步长
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>最大深度</td> 
    <td>
    控制决策树模型的复杂程度，默认不勾选，数值为3
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>最小样本数</td> 
    <td>
    数值为5
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>分类损失函数</td> 
    <td>
    对于分类任务，提供deviance一种损失函数供用户选择 <br/>
    对于回归任务，提供ls、lad、huber、quantile四种损失函数供用户选择
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“File”**控件加载数据集，连接**“Gradient Boosting Decision Tree”**控件构建模型，之后把**“File”**控件以及**“Gradient Boosting Decision Tree”**控件与**“Predictions”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/gbdt/workflow.png)

案例中加载“iris”数据集，**“Gradient Boosting Decision Tree”**控件参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/gbdt/workflow-result.png)