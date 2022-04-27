### 组件介绍
**“支持向量机（SVM）”**控件支持向量机将输入映射到更高维的特征空间。支持向量机（Support Vector Machine，简称 SVM）是一种机器学习基础算法，它使用超平面分割属性空间，从而最大化不同类别或类别值的实例之间的边界。该技术经常产生超高的预测性能结果。对于回归任务，SVM 使用 ε 不敏感损失在高维特征空间中执行线性回归。其估计精度取决于 C，ε 和内核参数的设置。该组件适用于分类和回归任务。
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的支持向量机学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
  - sv：来自训练集的数据实例的子集，被用作训练模型中的支持向量
<hr/>


### 页面介绍
点击**“支持向量机（SVM）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/model/svm/param.png) ](/img/aistudio/model/svm/param.png)

#### 参数选项
<table>
  <tr>
    <th width="120"></th>
    <th width="120">选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td></td> 
      <td>模型名称</td> 
      <td>
      设置模型名称，用于在其他组件中区分不同的模型
      </td> 
      <td>AdaBoost</td>
  </tr>
  <tr>
      <td rowspan="2">SVM类型</td> 
      <td>SVM</td> 
      <td>
      代价（C）：损失函数的惩罚因子，适用于分类和回归任务 <br/>
      回归损失（ε）：该参数适用于回归任务，定义与预测值无关的真值的距离
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>v-SVM</td> 
      <td>
      回归代价（C）：损失函数的惩罚因子，仅适用于回归任务 <br/>
      复杂度上界：该参数适用于分类和回归任务，训练误差的上界和支持向量的下界
      </td> 
      <td></td>
  </tr>
  <tr>
      <td rowspan="4">核函数类型</td> 
      <td>线性内核（Linear）</td> 
      <td rowspan="4">
      指定内核的函数会涉及以下常量： <br/>
      &emsp;&emsp;g：核函数中的 gamma 常量（推荐值为 1/k，其中 k 是属性的数量，但由于可能没有为组件提供训练集，因此默认值为 0，用户必须手动设置此选项）<br/>
      &emsp;&emsp;c：内核函数中的常量 c0，默认值为 0 <br/>
      &emsp;&emsp;d：内核的程度，默认值为3 <br/>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>多项式内核（Poly）</td> 
      <td></td> 
  </tr>
  <tr>
      <td>径向基内核（RBF）</td> 
      <td></td> 
  </tr>
  <tr>
      <td>sigmoid核</td> 
      <td></td> 
  </tr>
  <tr>
      <td rowspan="2">优化参数</td> 
      <td>数值容差</td> 
      <td>
      设置允许的偏差。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>迭代限制</td> 
      <td>
      设置允许的最大迭代次数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“支持向量机（sVM）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“支持向量机（SVM）”**控件与**“预测（Predictions）”**控件连接起来查看基于已经构建的 SVM 模型对输入数据进行预测的结果。  
[ ![](/img/aistudio/model/svm/workflow.png)   ](/img/aistudio/model/svm/workflow.png)  

案例中加载“iris”数据集，对于**“支持向量机（SVM）”**控件的配置，设置名称为 SVM，选择 v-SVM 类型，内核函数选择 Sigmoid 核，其他使用默认参数。案例中控件的配置及运行结果如下图所示。
[ ![](/img/aistudio/model/svm/workflow-result.png ](/img/aistudio/model/svm/workflow-result.png)