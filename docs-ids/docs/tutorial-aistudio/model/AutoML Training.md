### 组件介绍
**“自动化机器学习（AutoML Training）”**控件根据数据集以及用户的配置进行自动化机器学习，自动构建合适的算法模型。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
<hr/>


### 页面介绍
点击**“自动化机器学习（AutoML Training）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/automl/param.png)

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
      <td>AutoML</td>
  </tr>
  <tr>
      <td>基本配置</td> 
      <td>
      迭代次数：自动化机器学习优化过程的迭代次数 <br/>
      每代保留模型数：每次迭代产生的模型中需要保留的模型数<br/>
      单个产生后代数：每个遗传编程生成中产生的后代数<br/>
      终止检测迭代数：如果生成的模型没有优化改进，多少代之后应该终止<br/>
      启用随机种子：开启后每次执行结果都相同<br/>
      任务类型：根据数据集自动划分任务类型是属于回归还是分类
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>模型指标选择</td> 
      <td>
      用于比较生成的机器模型的效果
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“自动化机器学习（AutoML Training）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“自动化机器学习（AutoML Training）”**控件与**“预测（Predictions）”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/automl/workflow.png)

案例中加载“iris”数据集，使用**“自动化机器学习（AutoML Training）”**控件默认参数运行。案例中控件的配置以及运行结果如下图所示。
![workflow-result](/img/aistudio/model/automl/workflow-result.png)