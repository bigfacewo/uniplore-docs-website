### 组件介绍
**“Mean Shift”**控件基于核密度估计进行聚类操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集
  - cen：每个簇的中心点

<hr/>


### 页面介绍
点击**“Mean Shift”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/clustering/mean-shift/param.png) ](/img/aistudio/clustering/mean-shift/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>分位点</td> 
      <td>
      【0，1】之间
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>样本数</td> 
      <td>
      用于计算的实例数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>核函数宽带</td> 
      <td>
      根据参数计算出的核函数带宽
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>最大迭代数</td> 
      <td>
      算法运行的最大迭代次数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**连接**“Mean Shift”**控件进行聚类，之后连接**“查看数据”（Data Table）**控件查看聚类结果。  
[ ![](/img/aistudio/clustering/mean-shift/workflow.png) ](/img/aistudio/clustering/mean-shift/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/clustering/mean-shift/workflow-result.png ](/img/aistudio/clustering/mean-shift/workflow-result.png)