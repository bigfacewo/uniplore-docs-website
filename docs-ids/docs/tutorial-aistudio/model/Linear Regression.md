### 组件介绍
**“线性回归（Linear Regression）”**控件为线性回归算法，可选择 L1（LASSO），L2（ridge）或 L1L2（弹性网络）正则化。该模型可以识别预测变量 xi 和响应变量 y 之间的关系。此外，可以指定 Lasso 和 Ridge 正则化参数。Lasso 回归使具有 L1 范数惩罚项的最小二乘损失函数和 L2 范数惩罚项的 Ridge 正则化的惩罚版本最小化。**“线性回归（Linear Regression）”**仅适用于回归任务。
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的线性回归学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
  - data: 回归系数
<hr/>


### 页面介绍
点击**“线性回归（Linear Regression）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/linear-regression/param.png) ](/img/aistudio/model/linear-regression/param.png)

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
      <td></td>
  </tr>
  <tr>
      <td>规则化</td> 
      <td>
      设置正则化力度（α）和 Elastic net 混合比例参数 <br/>
      无正则化<br/>
      岭回归（L2规则惩罚项）<br/>
      套索回归（L1规则惩罚项）<br/>
      弹性网络回归
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“线性回归（Linear Regression）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“线性回归（Linear Regression）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
[ ![](/img/aistudio/model/linear-regression/workflow.png) ](/img/aistudio/model/linear-regression/workflow.png)

案例中加载“housing”数据集，**“线性回归（Linear Regression）”**控件参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/model/linear-regression/workflow-result.png ](/img/aistudio/model/linear-regression/workflow-result.png)