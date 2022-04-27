### 组件介绍
**“主成分分析”（PCA）**控件将主成分分析方法应用于输入数据。控件对输入数据计算其 PCA 线性转换，输出经过转换的带权重的数据或特征向量。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：经过PCA变换后的数据
  - cmp：特征向量

<hr/>


### 页面介绍
点击**“主成分分析”（PCA）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/pca/param.png) ](/img/aistudio/feature-engineering/pca/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>主成分占比</td> 
      <td>
      主成分覆盖的方差范围
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>奇异值分解方法</td> 
      <td>
      奇异值分解方法选择
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数据标准化</td> 
      <td>
      是否对数据进行标准化操作
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“主成分分析”（PCA）**控件对数据集进行主成分分析，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/pca/workflow.png) ](/img/aistudio/feature-engineering/pca/workflow.png)

案例中加载 iris 数据集，案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/pca/workflow-result.png) ](/img/aistudio/feature-engineering/pca/workflow-result.png)