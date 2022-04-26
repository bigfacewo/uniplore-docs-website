### 组件介绍
**“多项式回归（Polynomial Regression）”**控件使用模型模块中的任何回归器交互式地显示回归线。该组件可以设置多项式展开。多项式展开是多项式次数的一种调节，用于变换输入数据，并对曲线的形状有影响。如果多项式展开设置为1，这意味着在回归中使用未转换的数据。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：数据集
  - coef：回归系数
  - lrn：在交互页面中配置参数后的随机森林学习算法
  - mod：已训练的模型（仅当输入端odt存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“多项式回归（Polynomial Regression）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/polynomial-regression/param.png)

点击**“多项式回归”**按钮，查看数据集详情：  
![interaction](/img/aistudio/visualize/polynomial-regression/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td rowspan="3">相关信息</td> 
      <td>回归方法</td> 
      <td>
      模型名称，默认为Univariate Regression。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>平均绝对误差</td> 
      <td>
      真实值与得出的多项式回归曲线的平均绝对误差值。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>标准误差</td> 
      <td>
      真实值与得出的多项式回归曲线的标准误差值。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td rowspan="3">坐标轴数据</td> 
      <td>输入属性</td> 
      <td>
      x轴上的自变量。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>目标属性</td> 
      <td>
      y轴上的自变量。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>多项式扩展</td> 
      <td>
      多项式展开次数。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，再通过**“多项式回归（Polynomial Regression）”**控件进行相关操作，最后连接**“查看数据（Data Table）”**查看回归系数。  
![workflow](/img/aistudio/visualize/polynomial-regression/workflow.png)

案例中加载“iris”数据集，运行**“多项式回归（Polynomial Regression）”**后，设置多项式扩展值为3，其余使用默认参数。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/visualize/polynomial-regression/workflow-result.png)