### 组件介绍
**“随机梯度下降（Stochastic Gradient Descent）”**控件使用梯度下降的随机逼近最小化目标函数。实现了随机梯度下降算法，它使用线性函数使所选择的损失函数最小化。该算法通过一次考虑一个样本逼近真实的梯度，并且同时基于损失函数的梯度来更新模型。该算法对于大规模和稀疏的数据集特别有效。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的SGD学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“Stochastic Gradient Descent”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/sgd/param.png)

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
      <td>SGD</td>
  </tr>
  <tr>
      <td>分类损失度函数</td> 
      <td>
      Hinge（线性 SVM）<br/>
      logistic Regression（逻辑回归 SGD） <br/>
      Modified Huber（平稳的损失，对异常值和概率估计的不敏感）<br/>
      Squared Hinge（Hinge 二次方）<br/>
      Preceptron（感知器算法使用的线性损失，二分类的线性分类模型<br/>
      Squared Loss（平方损失，拟合到普通的最小二乘法）<br/>
      Huber（ε 以上的线性损失，需要设置 ε）<br/>
      Epsilon insensitive（忽略ε内的误差，ε 以上的线性损失，需要设置 ε<br/>
      Squared epsilon insensitive（损失超出 ε 的平方，需要设置 ε）
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>回归损失度函数</td> 
    <td>
    Squared Loss（平方损失，拟合到普通的最小二乘法）<br/>
    Huber（ε以上的线性损失，需要设置 ε）<br/>
    Epsilon insensitive（忽略 ε 内的误差，ε 以上的线性损失，需要设置 ε）<br/>
    Squared epsilon insensitive（损失超出 ε 的平方，需要设置 ε）
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>正则化方法</td> 
    <td>
    None<br/>
    Lasso（L1）（L1，导致稀疏）<br/>
    Ridge（L2）（L2，标准正规化）<br/>
    Elastic net（混合）
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>正则化因子</td> 
    <td>
    默认0.00001
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>混合因子</td> 
    <td>
    默认0.15
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>学习速率</td> 
    <td>
    Constant：学习率保持不变 <br/>
    Optimal：由 Leon Bottou 提出的启发式方法 <br/>
    Inverse scaling：收益率和迭代次数成反比
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>初始学习速率</td> 
    <td>
    默认0.01
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>反向缩放指数</td> 
    <td>
    默认0.25
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>迭代次数</td> 
    <td>
    默认1000
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>每次迭代后混洗数据</td> 
    <td>
    默认勾选
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>随机混洗的固定种子数</td> 
    <td>
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“File”**控件加载数据集，连接**“Stochastic Gradient Descent”**控件构建模型，之后把**“File”**控件以及**“Stochastic Gradient Descent”**控件与**“Predictions”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/sgd/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/sgd/workflow-result.png)