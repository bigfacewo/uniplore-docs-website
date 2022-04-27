### 组件介绍
**“一致性算法（Constant）”**控件预测训练集中最频繁的类或均值。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 多数/平均学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
<hr/>


### 页面介绍
点击**“一致性算法（Constant）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/constant/param.png) ](/img/aistudio/model/constant/param.png)

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
      <td>Constant</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“一致性算法（Constant）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“一致性算法（Constant）”**控件与**“预测（Predictions）”**控件，然后连接起来查看预测的结果。
[ ![](/img/aistudio/model/constant/workflow.png) ](/img/aistudio/model/constant/workflow.png)

案例中加载“housing”数据集，将分类器命名为 Constant。案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/model/constant/workflow-result.png) ](/img/aistudio/model/constant/workflow-result.png)