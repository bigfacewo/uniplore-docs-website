### 组件介绍
**“流行学习”（Manifold Learning）**控件实现了非线性降维。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“流行学习”（Manifold Learning）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/manifold-learning/param.png) ](/img/aistudio/feature-engineering/manifold-learning/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>方法</td> 
      <td>
      t分布随机嵌入（t-SNE）<br/>
      多维缩放（MDS）<br/>
      等度量映射（Isomap）<br/>
      局部线性嵌入（Locally Linear Embedding）<br/>
      谱嵌入（Spectral Embedding）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>参数信息</td> 
      <td>
      各方法对应的参数指标
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>输出信息</td> 
      <td>
      输出数据的维度数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“流行学习”（Manifold Learning）**控件对数据集进行降维，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/manifold-learning/workflow.png) ](/img/aistudio/feature-engineering/manifold-learning/workflow.png)

案例中加载 iris 数据集，使用“Manifold Learning”默认方法进行降维。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/manifold-learning/workflow-result.png) ](/img/aistudio/feature-engineering/manifold-learning/workflow-result.png)