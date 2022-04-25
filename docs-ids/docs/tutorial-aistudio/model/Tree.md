### 组件介绍
**“决策树（Tree）”**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的决策树学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“决策树（Tree）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/tree/param.png)

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
      <td>Tree</td>
  </tr>
  <tr>
      <td>叶子节点中的最小实例数</td> 
      <td>
      如果选中，算法不会将小于指定数量的训练实例放入任何分支
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>分割子集不小于</td> 
    <td>
    禁止算法用小于给定数量的实例来分割节点
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>限制最大的树深度</td> 
    <td>
    将分类树的深度限制为指定的节点级数
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“决策树（Tree）”**控件进行聚类，之后把**“加载文件（File）”**控件以及**“决策树（Tree）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/tree/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/tree/workflow-result.png)