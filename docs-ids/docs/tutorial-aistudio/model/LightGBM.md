### 组件介绍
**“LightGBM”**控件主要使用层次聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
  - pre: 预处理方法
- 输出：
  - lrn: 在交互页面中配置参数后的LightGBM学习算法
  - mod: 已训练的模型（仅当输入端data存在时，才会有输出信息）

<hr/>


### 页面介绍
点击**“LightGBM”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/lightgbm/param.png)

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
      <td>LightGBM</td>
  </tr>
  <tr>
      <td>学习器类型</td> 
      <td>
      GBDT（traditional Gradient Boosting Decision Tree）<br/>
      DART（Dropouts meet Multiple Additive Regression Trees）<br/>
      GOSS（Gradient-based One-Side Sampling）<br/>
      RF（Random Forest）
      </td> 
      <td></td>
  </tr>
  <tr>
    <td>树的数量</td> 
    <td>
    默认为10
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>学习率</td> 
    <td>
    默认为0.1
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>抽样率</td> 
    <td>
    默认为0.1
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>最大深度</td> 
    <td>
    限制树模型的最大深度，默认不勾选
    </td> 
    <td></td>
  </tr>
  <tr>
    <td>最大叶子数</td> 
    <td>
    默认不勾选
    </td> 
    <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“File”**控件加载数据集，连接**“LightGBM”**控件构建模型，之后把**“File”**控件以及**“LightGBM”**控件与**“Predictions”**控件连接起来查看预测的结果。  
![workflow](/img/aistudio/model/lightgbm/workflow.png)

案例中加载“iris”数据集，其余参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/model/lightgbm/workflow-result.png)