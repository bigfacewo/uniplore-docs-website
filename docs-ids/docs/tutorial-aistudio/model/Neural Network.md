### 组件介绍
**“神经网络（Neural Network）”**控件实现对输入数据根据给定超参数构建MLP分类或回归模型，并把已训练的模型发送到输出通道。多层感知器（MLP），它是一种可用于回归和分类的神经网络。MLP由多个完全连接的隐藏层组成，具有非线性激活功能。
<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn：在交互页面中配置参数后的MLP学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）
<hr/>


### 页面介绍
点击**“神经网络（Neural Network）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/neural-network/param.png)

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
      <td>Neural Network</td>
  </tr>
  <tr>
      <td>神经网络（Neural Network）</td> 
      <td>
      定义为ith元素表示ith隐藏层中的神经元数量
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>激活函数</td> 
      <td>
      Identity：无操作激活，用于实现线性瓶颈 <br/>
      Logistic：逻辑sigmoid函数<br/>
      tanh： 双曲正切函数<br/>
      ReLu：整流器线性单元功能，默认为ReLu
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>优化方法</td> 
      <td>
      L-BFGS-B：拟牛顿法族中的优化器 <br/>
      SGD：随机梯度下降<br/>
      Adam：基于随机梯度的优化器默认为Adam
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>正则项</td> 
      <td>
      默认数值为0.0001
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>最大迭代次数</td> 
      <td>
      通过gamma降低学习率之前的迭代次数，默认数值为200
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>可复制训练</td> 
      <td>
      默认勾选
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，连接**“神经网络（Neural Network）”**控件构建模型，之后把**“加载文件（File）”**控件以及**“神经网络（Neural Network）”**控件与**“预测（Predictions）”**控件连接起来查看基于已经构建的 Neural Network 模型对输入数据进行预测的结果。
![workflow](/img/aistudio/model/neural-network/workflow.png)

案例中加载“iris”数据集，其他使用默认参数。案例中控件的配置以及执行结果如下图所示。
![workflow-result](/img/aistudio/model/neural-network/workflow-result.png)