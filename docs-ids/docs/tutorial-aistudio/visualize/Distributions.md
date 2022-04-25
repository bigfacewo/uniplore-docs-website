### 组件介绍
**“数据分布（Distributions）”**控件用于显示单个属性值的分布。对于离散属性，“Distributions”组件显示每个属性值出现在数据集中的次数。
<hr/>

- 输入：
  - data: 数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“数据分布（Distributions）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/distributions/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization-1](/img/aistudio/visualize/distributions/visualization-1.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>特征</td> 
      <td>
      变量分布显示列表
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分箱宽度</td> 
      <td>
      对于连续型属性划分的区间个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分组属性</td> 
      <td>
      选择分组按类属性显示
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“数据分布（Distributions）”**控件绘制箱型图。  
![workflow](/img/aistudio/visualize/distributions/workflow.png)

案例中加载“iris”数据集，运行**“数据分布（Distributions）”**后，分组属性选择【iris】。案例中控件的配置以及执行结果如下图所示。  
![visualization-2](/img/aistudio/visualize/distributions/visualization-2.png)