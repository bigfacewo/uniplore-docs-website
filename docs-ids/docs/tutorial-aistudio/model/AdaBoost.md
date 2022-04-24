### 组件介绍
**“自适应提升算法（AdaBoost）”**，它是一种集成学习算法，将较弱的机器学习算法作为输入，可提升该算法的性能
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
  - lrn: 机器学习算法
- 输出：
  - lrn: 在交互页面中配置参数后的AdaBoost学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
<hr/>


### 页面介绍
点击**“AdaBoost”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/adaboost/param.png)

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
      <td>AdaBoost</td>
  </tr>
  <tr>
      <td>参数</td> 
      <td>
      学习器数目<br/>
      学习率：它决定了获得的新信息在多大程度上将覆盖旧信息（0=不学习任何东西，1=只考虑最新的信息）<br/>
      固定随机数生成器的种子数：设置一个固定的种子，使重现结果
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>提升方法</td> 
      <td>
      分类算法：当输入 lrn 是分类算法时，该参数有效；选项包括 SAMME（用分类结果更新基础估计器的权重）和 SAMME.R（用概率估计来更新基础估计器的权重）<br/>
      损失函数：当输入 lrn 是回归算法时，该参数有效，选项包括 Linear、Square 和 Exponential
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“File”**控件加载数据集，连接**“AdaBoost”**控件构建模型，之后把**“File”**控件以及**“AdaBoost”**控件与**“Predictions”**控件连接起来查看基于已经构建的 AdaBoost 模型对输入数据进行预测的结果。
![workflow](/img/aistudio/model/adaboost/workflow.png)

案例中加载“iris”数据集，其余使用默认配置。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/adaboost/workflow-result.png)