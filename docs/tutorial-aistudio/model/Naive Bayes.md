---
sidebar_position: 9
---
### 组件介绍
**“朴素贝叶斯（Naive Bayes）”**控件是基于贝叶斯定理和特征独立假设的快速简单概率分类器。朴素贝叶斯从数据中学习一个朴素贝叶斯模型，它只适用于分类任务。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在对话框中配置参数后的朴素贝叶斯学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“朴素贝叶斯（Naive Bayes）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/naive-bayes/param.png) ](/img/aistudio/model/naive-bayes/param.png)

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
      <td>Naive Bayes</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“朴素贝叶斯（Naive Bayes）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“朴素贝叶斯（Naive Bayes）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
[ ![](/img/aistudio/model/naive-bayes/workflow.png) ](/img/aistudio/model/naive-bayes/workflow.png)

案例中加载“iris”数据集，案例中控件的配置及运行结果如下图所示。  
[ ![](/img/aistudio/model/naive-bayes/workflow-result.png) ](/img/aistudio/model/naive-bayes/workflow-result.png)