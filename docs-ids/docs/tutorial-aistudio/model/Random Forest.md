### 组件介绍
**“随机森林（Random Forest）”**控件使用决策树集合进行预测。随机森林是一种用于分类、回归和其他任务的集合学习方法。由 Tin Kam Ho 首先提出，并由 Leo Breiman (Breiman，2001) 和 Adele Culter 进一步发展。随机森林构建了一组决策树，每棵树都是从训练数据的 bootstrap 样本开发而来的。在开发独立的树时，绘制任意属性子集，从中选择分割的最佳属性。最终的模型是基于森林中独立的树的大多数投票。随机森林适合用于分类和回归任务。
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的随机森林学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“随机森林（Random Forest）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/random-forest/param.png)

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
      <td>Random Forest</td>
  </tr>
  <tr>
      <td>树的数量</td> 
      <td>
      默认数值为10。
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>每次拆分时考虑的属性数</td> 
    <td>
    若未指定“随机发生器的固定种子”，则此数字等于数据中属性数量的平方根
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>使用随机种子</td> 
    <td>
    默认不勾选
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>限制单颗树木的深度</td> 
    <td>
    默认不勾选，数值为3
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>小于子集的树目停止划分</td> 
    <td>
    默认勾选，数值为5
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“随机森林（Random Forest）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“随机森林（Random Forest）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/random-forest/workflow.png)

案例中加载“iris”数据集，**“随机森林（Random Forest）”**控件参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/random-forest/workflow-result.png)