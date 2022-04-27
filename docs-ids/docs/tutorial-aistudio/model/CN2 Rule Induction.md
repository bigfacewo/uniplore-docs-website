### 组件介绍
**“CN2规则归纳（CN2 Rule Induction）”**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的CN2学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“CN2规则归纳（CN2 Rule Induction）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/cn2-rule-induction/param.png) ](/img/aistudio/model/cn2-rule-induction/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>学习器名称</td> 
      <td>
      设置学习器的名称，用于在其他组件中区分不同的学习器
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>规则排序</td> 
      <td>
      有序：归纳有序的规则（决策列表） 查找规则条件，大部分分类被归纳到规则的头部<br/>
      无序：归纳无序的规则（规则集） 针对原始数据分别学习每个分类的规则
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>覆盖算法</td> 
      <td>
      独有：在覆盖学习实例之后，将其从进一步考虑中移除。<br/>
      加权：在覆盖学习实例之后，减小其权重（乘以γ）同时反过来减小其对进一步迭代算法的影响
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>规则搜索</td> 
      <td>
      评估方法：选择一个启发式评估找到假设： <br/>
      &emsp;&emsp;Entropy：衡量内容的不可预测性 <br/>
      &emsp;&emsp;Laplace Accuracy  <br/>
      &emsp;&emsp;Weighted Relative Accuracy  <br/>
      波束宽度：保存迄今为止发现的最佳规则，并检测固定数量的替代方案（波束）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>规则过滤</td> 
      <td>
      最小规则覆盖范围：发现的规则必须至少涵盖所要求的最小数量的例子，无序的规则必须涵盖大多数目标类的例子<br/>
      最大规则长度：发现的规则可以最多组合选择器（条件）的最大允许数量<br/>
      统计显著性（默认 α）：重要性测试来删除关于类的初始分配的特有的规则（不常用）<br/>
      相对重要性（父系 α）：重要性测试来删除关于父类分布的特有的规则（不常用）
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，连接**“CN2规则归纳（CN2 Rule Induction）”**控件进行聚类，之后把**“加载文件”（File）**控件以及**“CN2规则归纳（CN2 Rule Induction）”**控件与**“预测（Predictions）”**控件连接起来查看基于已经构建的**“CN2规则归纳（CN2 Rule Induction）”**模型对输入数据进行预测的结果。  
[ ![](/img/aistudio/model/cn2-rule-induction/workflow.png) ](/img/aistudio/model/cn2-rule-induction/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/model/cn2-rule-induction/workflow-result.png ](/img/aistudio/model/cn2-rule-induction/workflow-result.png)