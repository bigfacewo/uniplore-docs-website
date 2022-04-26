### 组件介绍
**“逻辑回归（Logistic Regression）”**控件用LASSO（L1）或Ridge（L2）正则化的逻辑回归分类算法，从数据中学习逻辑回归模型，它只适用于分类任务。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的逻辑回归学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
  - data: 逻辑回归系数

<hr/>


### 页面介绍
点击**“逻辑回归（Logistic Regression）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/logistic-regression/param.png)

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
      <td>Logistic Regression</td>
  </tr>
  <tr>
      <td>正则化方法</td> 
      <td>
      套索回归LASSO（L1）或 岭回归Ridge（L2）
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>惩罚力度</td> 
    <td>
    默认 C=1
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“逻辑回归（Logistic Regression）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“逻辑回归（Logistic Regression）”**控件与**“预测（Predictions）”**控件，然后连接起来查看基于已经构建的逻辑回归模型对输入数据进行预测的结果。
![workflow](/img/aistudio/model/logistic-regression/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。在构建模型时，**“逻辑回归（Logistic Regression）”**控件选用 岭回归Ridge（L2）正则化方法，并且设置惩罚力度 C=1。之后基于已经构建的 Logistic Regression 模型对数据集进行预测。案例中控件的配置以及运行结果如下图所示。
![workflow-result](/img/aistudio/model/logistic-regression/workflow-result.png)