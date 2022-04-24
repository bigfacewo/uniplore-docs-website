### 组件介绍
**“离群值处理”（Outliers）**控件根据指定离群值检测策略对输入数据集进行离群值检测。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - inl：内群值数据集
  - otl：离群值数据集

<hr/>


### 页面介绍
点击**“离群值处理”（Outliers）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/preprocess/outliers/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>离群值检测方法及参数</td> 
      <td>
      One class SVM：根据核心类对数据进行分类<br/>
      &emsp;&emsp;Nu 是训练误差部分的上限和支持向量部分的下限参数<br/>
      &emsp;&emsp;核系数（Kernel coefficient）是一个伽玛参数，它指定了单个数据实例具有多少影响力<br/>
      Covariance Estimator：使用距离度量对数据进行分类<br/>
      &emsp;&emsp;污染指数（Contamination）是指数据集中离群值的比例<br/>
      &emsp;&emsp;支持比例（Support fraction）指定包含在估计中的点的比例<br/>
      Local Outlier Factor：k-最近邻对数据分类<br/>
      &emsp;&emsp;污染指数（Contamination）是指数据集中离群值的比例<br/>
      &emsp;&emsp;邻接点（Neighbor）是指邻节点数<br/>
      &emsp;&emsp;度量（Metric）是距离指标<br/>
      Isolation Forest：通过随机选择一个特征，然后根据随机选择所选特征的最大值和最小值之间的分割值来进行分类<br/>
      &emsp;&emsp;污染指数（Contamination）是指数据集中离群值的比例<br/>
      &emsp;&emsp;可复制训练（Replicable）是代表是否启用随机种子
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“离群值处理”（Outliers）**控件对数据集中离群值进行检测，之后通过**“查看数据”（Data Table）**控件查看离群值数据集和内群值数据集。   
![workflow](/img/aistudio/preprocess/outliers/workflow.png)

案例中加载 iris 数据集，**“离群值处理”（Outliers）**使用默认配置。案例中控件的配置以及执行结果如下图所示。    
![workflow-result](/img/aistudio/preprocess/outliers/workflow-result.png)